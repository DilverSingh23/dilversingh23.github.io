export const projects = [
    { 
        projectName: "Receiptify",
        description: `Receipt management platform powered by Gemini 2.5 Flash, which processes uploaded receipt images 
        via base64 conversion for intelligent data extraction. Integrates Supabase for cloud-based receipt storage and retrieval, with an 
        AI-driven categorization engine that automatically organizes receipts into folders. Includes real-time search and filtering, image 
        re-download functionality, and a financial analytics dashboard surfacing spending insights and AI-generated budget recommendations.`,
        image: "/projects/receiptify.png",
        github: "https://github.com/alfredscyriac/Receiptify",
        demo: "https://receiptify-khaki.vercel.app",
        tags: ["React", "Next.js", "Tailwind CSS", "Supabase", "Gemini API", "Chart.js"]
    }, 
    {
        projectName: "FounderVision",
        description: `Interactive business canvas generator that helps early-stage startups transform ideas into structured business 
        models. Leverages Gemini 2.5 Flash to generate 11 tailored components across all canvas sections, covering everything from value 
        propositions to revenue streams. Implements html2Canvas and jsPDF to convert the completed canvas into a clean, downloadable PDF.`,
        image: "/projects/foundervision.png",
        github: "https://github.com/dilversingh23/foundervision",
        demo: "https://foundervision.vercel.app",
        tags: ["React", "Next.js", "Tailwind CSS", "Gemini API", "jspdf", "html2canvas"]
    },
    {
        projectName: "Noteify",
        description: `Note-taking application with a serverless REST API built on AWS Lambda and API Gateway, backed by DynamoDB for 
        scalable data storage. Incorporates AWS Cognito for client-side authentication and persistent session management, with token 
        validation middleware enforcing secure, user-specific data access.`,
        image: "/projects/noteify.png",
        github: "https://github.com/dilversingh23/noteify",
        demo: "https://noteify-pearl.vercel.app",
        tags: ["React", "Node.js", "Express.js", "AWS Lambda", "AWS DynamoDB", "AWS Cognito", "API Gateway"]
    }
]