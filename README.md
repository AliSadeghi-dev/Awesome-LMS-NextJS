# 🎓 LMS Next.js - Learning Management System

A modern, secure, and feature-rich Learning Management System built with Next.js 15, featuring advanced authentication, rate limiting, and a beautiful UI.

## ✨ Features

### 🔐 Authentication & Security

- **Better Auth** integration with OTP email verification
- **GitHub OAuth** social login support
- **Arcjet** security protection (rate limiting, bot detection, shield protection)
- **Session management** with secure token handling
- **Email verification** using Resend service

### 🎨 User Interface

- **Modern UI** built with Radix UI components
- **Dark/Light theme** support with next-themes
- **Responsive design** with mobile-first approach
- **Beautiful components** including forms, dialogs, charts, and more
- **TypeScript** for type safety and better development experience

### 🛠 Technical Stack

- **Next.js 15** with App Router and Turbopack
- **React 19** with latest features
- **Prisma** with PostgreSQL database
- **Tailwind CSS 4** for styling
- **Zod** for schema validation
- **React Hook Form** for form handling
- **Sonner** for toast notifications

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database
- GitHub OAuth app (optional, for social login)
- Resend account (for email verification)
- Arcjet account (for security features)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd lms-nextjs
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/lms_db"

   # Better Auth
   BETTER_AUTH_SECRET="your-secret-key-here"
   BETTER_AUTH_URL="http://localhost:3000"

   # GitHub OAuth (optional)
   AUTH_GITHUB_CLIENT_ID="your-github-client-id"
   AUTH_GITHUB_CLIENT_SECRET="your-github-client-secret"

   # Email Service
   RESEND_API_KEY="your-resend-api-key"

   # Security
   ARCJET_KEY="your-arcjet-key"
   ```

4. **Set up the database**

   ```bash
   pnpm prisma generate
   pnpm prisma db push
   ```

5. **Run the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
lms-nextjs/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── login/               # Login page and components
│   │   └── verify-request/      # Email verification page
│   ├── api/                     # API routes
│   │   └── auth/                # Authentication API
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Reusable components
│   └── ui/                      # UI components (Radix UI)
├── hooks/                       # Custom React hooks
├── lib/                         # Utility libraries
│   ├── generated/               # Prisma generated files
│   ├── auth.ts                  # Better Auth configuration
│   ├── auth-client.ts           # Client-side auth utilities
│   ├── arcjet.ts                # Security configuration
│   ├── db.ts                    # Database connection
│   ├── env.ts                   # Environment validation
│   └── utils.ts                 # Utility functions
├── prisma/                      # Database schema and migrations
└── public/                      # Static assets
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality

## 🔐 Authentication Flow

1. **Login/Register**: Users can sign in with email (OTP) or GitHub OAuth
2. **Email Verification**: OTP is sent via Resend for email verification
3. **Session Management**: Secure sessions with automatic token refresh
4. **Logout**: Clean session termination with redirect

## 🛡 Security Features

- **Rate Limiting**: Protects against brute force attacks
- **Bot Detection**: Prevents automated attacks
- **Shield Protection**: Advanced security rules
- **Input Validation**: Zod schema validation for all inputs
- **Secure Headers**: CSRF protection and secure cookies

## 🎨 UI Components

The project includes a comprehensive set of UI components:

- **Forms**: Input, Textarea, Select, Checkbox with validation
- **Navigation**: Breadcrumb, Dropdown Menu, Tabs
- **Feedback**: Alert Dialog, Toast notifications, Progress
- **Data Display**: Table, Chart, Badge, Avatar
- **Layout**: Card, Separator, Sidebar, Sheet
- **Interactive**: Button, Toggle, Tooltip, Collapsible

## 📊 Database Schema

The application uses the following main models:

- **User**: User accounts with authentication data
- **Session**: Active user sessions with security tracking
- **Account**: OAuth provider accounts (GitHub)
- **Verification**: Email verification tokens

## 🌐 Environment Configuration

The application uses `@t3-oss/env-core` for type-safe environment variable validation. All required environment variables are validated at startup.

## 🚀 Deployment

1. **Build the application**

   ```bash
   pnpm build
   ```

2. **Set up production environment variables**
   - Configure production database URL
   - Set secure secrets for authentication
   - Configure OAuth providers for production
   - Set up email service credentials
   - Configure Arcjet for production security

3. **Deploy to your preferred platform**
   - Vercel (recommended for Next.js)
   - Netlify
   - Railway
   - Docker container

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Better Auth](https://better-auth.com/) - Authentication library
- [Radix UI](https://www.radix-ui.com/) - UI component primitives
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Prisma](https://www.prisma.io/) - Database toolkit
- [Arcjet](https://arcjet.com/) - Security platform

---

Made with ❤️ using Next.js and modern web technologies.
