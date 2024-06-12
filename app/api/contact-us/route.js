import { mailOptions, transporter } from "@/email/client";
import { replaceMergeTags, stripHTMLTags } from "@/email/helpers";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
    const data = await request.json();

    // Get HTML content
    const htmlFilePath = path.join(process.cwd(), 'email', 'contact-form.html');
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    const mergedHTML = replaceMergeTags(data, htmlContent);
    const plainTextContent = stripHTMLTags(mergedHTML);

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: 'New Content',
            text: plainTextContent,
            html: mergedHTML
        });
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
