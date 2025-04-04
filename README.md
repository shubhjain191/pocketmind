# PocketMind - AI-Powered Personal Finance Assistant

## Overview
PocketMind is an intelligent personal finance management application that combines AI technology with modern financial tools to help you make smarter decisions about your money. It provides personalized insights, automated expense tracking, and intelligent budget recommendations tailored to your financial goals.

## Key Features
- 🤖 **AI-Powered Analysis**: Get personalized financial insights and recommendations
- 📊 **Smart Dashboard**: Modern, intuitive interface with real-time financial analytics
- 💰 **Expense Tracking**: Automated categorization and tracking of your expenses
- 📈 **Budget Planning**: AI-assisted budget creation based on your spending patterns
- 🔐 **Secure Authentication**: Protected access to your financial data
- 📱 **Responsive Design**: Seamless experience across all devices

## Technology Stack
- **Frontend**: Next.js with JavaScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Authentication**: Clerk for secure user management
- **AI Integration**: OpenAI API for financial insights
- **Database**: PostgreSQL with Prisma ORM
- **Email Service**: Resend for notifications
- **Security**: Arcjet for rate limiting and protection
- **Background Jobs**: Inngest for scheduled tasks

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/pocketmind.git
   cd pocketmind
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Authentication (Clerk)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Database (PostgreSQL)
   DATABASE_URL=your_database_url

   # OpenAI
   OPENAI_API_KEY=your_openai_api_key

   # Email (Resend)
   RESEND_API_KEY=your_resend_api_key

   # Security (Arcjet)
   ARCJET_API_KEY=your_arcjet_api_key

   # Background Jobs (Inngest)
   INNGEST_EVENT_KEY=your_inngest_key
   ```

4. Initialize the database
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage
1. Create an account or log in using Clerk authentication
2. Set up your financial profile and preferences
3. Connect your financial accounts or manually input transactions
4. Use the dashboard to track expenses and view insights
5. Set up budgets and receive notifications
6. Review AI-powered recommendations for better financial management

## Deployment
1. Fork and clone the repository
2. Set up a PostgreSQL database
3. Configure environment variables in your hosting platform
4. Deploy using your preferred hosting service (e.g., Vercel, Netlify)
5. Run database migrations

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request. For major changes:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support
If you have any questions or need support, please open an issue in the repository.

---

Made with ❤️ by Shubh Jain