const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// 配置 CORS
app.use(cors({
    origin: '*' // 允許所有來源
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 提供靜態文件
app.use(express.static(path.join(__dirname, 'build')));

app.post('/api/send-email', (req, res) => {
    console.log(req.body);
    const { name, email, message } = req.body;

    // 創建一個 SMTP 傳輸器
    const transporter = nodemailer.createTransport({
        service: 'gmail', // 使用 Gmail 作為郵件服務
        auth: {
            user: 'tkc9555@gmail.com', // 你的 Gmail 地址
            pass: 'ulssbemavmrjoojg'   // 你的 Gmail 密碼或應用專用密碼
        }
    });

    
    // 設置郵件內容
    const mailOptions = {
        from: email,
        to: 'tako9555@gmail.com', // 接收郵件的地址
        subject: 'TKC聯絡表單提交/詢問',
        text: `姓名: ${name}\n郵件: ${email}\n信息: ${message}`,
        replyTo: email
    };

    // 發送郵件
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send(error.toString());
        }
        res.status(200).send('郵件已發送: ' + info.response);
    });
});

// 將所有其他請求重定向到 React 應用
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});