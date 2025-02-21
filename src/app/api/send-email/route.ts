// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // 創建 SMTP 傳輸器
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tkc9555@gmail.com',
        pass: 'ulssbemavmrjoojg'
      }
    })

    // 設置郵件內容
    const mailOptions = {
      from: email,
      to: 'tako9555@gmail.com',
      subject: 'TKC聯絡表單提交/詢問',
      text: `姓名: ${name}\n郵件: ${email}\n信息: ${message}`,
      replyTo: email
    }

    // 發送郵件
    const info = await transporter.sendMail(mailOptions)
    
    return NextResponse.json(
      { message: '郵件已發送', info: info.response },
      { status: 200 }
    )

  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: '發送郵件時出錯' },
      { status: 500 }
    )
  }
}