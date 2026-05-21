# Billing System

A comprehensive billing system designed to manage invoices, payments, customers, and subscriptions.

## Features

- **Customer Management**: Create and manage customer profiles
- **Invoice Generation**: Automatic invoice creation and tracking
- **Payment Processing**: Process and track customer payments
- **Subscription Management**: Handle recurring billing and subscriptions
- **Reporting**: Generate financial reports and analytics
- **Tax Calculation**: Automatic tax computation
- **Multi-currency Support**: Handle multiple currencies
- **Notification System**: Automated email notifications for invoices and payments

## Project Structure

```
billing-system/
├── backend/           # Node.js/Express API
├── frontend/          # React web application
├── database/          # Database schemas and migrations
├── docs/              # Documentation
├── tests/             # Test suite
└── config/            # Configuration files
```

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Payment Processing**: Stripe API
- **Email**: Nodemailer

## Getting Started

### Prerequisites

- Node.js (v14+)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/kirkeliets48-byte/billing-system.git
cd billing-system
```

2. Install dependencies
```bash
cd backend && npm install
cd ../frontend && npm install
```

3. Set up environment variables (see `.env.example`)

4. Run database migrations
```bash
cd backend && npm run migrate
```

5. Start the application
```bash
# Backend
cd backend && npm start

# Frontend (in another terminal)
cd frontend && npm start
```

## API Documentation

See [API.md](./docs/API.md) for detailed API documentation.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT License - see LICENSE file for details
