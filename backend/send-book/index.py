import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send book download link via email to user
    Args: event with httpMethod, body containing name, email, phone
          context with request_id
    Returns: HTTP response with success/error status
    Version: 1.1
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    user_name: str = body_data.get('name', '')
    user_email: str = body_data.get('email', '')
    user_phone: str = body_data.get('phone', '')
    
    if not user_email or not user_name:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Name and email are required'})
        }
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    book_url = os.environ.get('BOOK_DOWNLOAD_URL')
    
    if not all([smtp_host, smtp_user, smtp_password, book_url]):
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'SMTP configuration incomplete'})
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = 'Ваша книга "35 способов получить клиентов без затрат"'
    msg['From'] = smtp_user
    msg['To'] = user_email
    
    text_content = f'''Здравствуйте, {user_name}!

Спасибо за интерес к книге "35 способов получить клиентов без затрат".

Скачать книгу можно по ссылке:
{book_url}

Если у вас возникли вопросы, пишите на {smtp_user}

С уважением,
БизнесРост'''
    
    html_content = f'''
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #0ea5e9;">Здравствуйте, {user_name}!</h2>
        <p>Спасибо за интерес к книге <strong>"35 способов получить клиентов без затрат"</strong>.</p>
        <p style="margin: 30px 0;">
          <a href="{book_url}" 
             style="background-color: #0ea5e9; color: white; padding: 12px 30px; 
                    text-decoration: none; border-radius: 5px; display: inline-block;">
            Скачать книгу
          </a>
        </p>
        <p>Если у вас возникли вопросы, пишите на {smtp_user}</p>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 14px;">
          С уважением,<br>
          <strong>БизнесРост</strong>
        </p>
      </body>
    </html>
    '''
    
    part1 = MIMEText(text_content, 'plain', 'utf-8')
    part2 = MIMEText(html_content, 'html', 'utf-8')
    
    msg.attach(part1)
    msg.attach(part2)
    
    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': True,
                'message': 'Email sent successfully'
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': False,
                'error': str(e)
            })
        }