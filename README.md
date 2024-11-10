# Admin Dashboard

This is an Admin Dashboard application built using Next.JS, Material UI, and Chart.js for data visualization. It provides key functionalities such as user management, content moderation, engagement overview, and blockchain activity tracking. The dashboard is fully responsive and designed to offer a seamless experience on both desktop and mobile devices.

## Features

- **User Management**: Display and manage user-related data.
- **Content Moderation**: View and moderate content posted by users.
- **Engagement Overview**: Visual representation of user engagement metrics.
- **Blockchain Activity Overview**: Display blockchain-related activities.
- **Analytics**: Display daily and monthly user metrics in bar charts.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Next.js**: React framework for server-side rendering and routing.
- **Material UI**: React UI framework for styling and responsive layouts.
- **Chart.js**: JavaScript library for creating interactive data visualizations.
- **React Context / Hooks**: Used for managing state and API calls.

## Installation

Follow these steps to set up the project locally.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pandasuryanarayan/Admin-Dashboard.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Admin-Dashboard
   ```

3. **Install dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```
4. **Add API URL**:
   Create a `.env` file add `NEXT_PUBLIC_ADMIN_DASHBOARD_API` to `https://api.socialverseapp.com/admin/dashboard` using Vscode or Text editor in root directory path.

5. To run in localhost it requires `proxy server`. Go to `services/api.js` and follow instructions in `api.js`.
   
6. **Start the development server**:
   ```bash
   npm run dev
   ```
   Your app will now be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `pages/`
  - `components/`: Contains individual dashboard components like `UserManagement`, `ContentModeration`, `Analytics`, `EngagementOverview`, `BlockchainActivityOverview`.
    - `charts`/: Contains file of fetching different charts
- `services/`
    - `api.js`: Contains API service hooks to fetch data.
- `index.js`: Renders the React application.

## Components

### 1. **UserManagement**
   Displays user-related data, allowing admins to manage user information.

### 2. **ContentModeration**
   Displays content posted by users and allows moderation actions.

### 3. **EngagementOverview**
   Provides visual charts to show engagement metrics like daily and monthly active users.

### 4. **BlockchainActivityOverview**
   Displays information related to blockchain activity, such as transactions and blocks.

### 5. **Analytics**
   Visualizes data with bar charts showing daily and monthly user metrics.

## License

This project is open source and available under the [Apache License 2.0](LICENSE).

## Acknowledgements

- [Material UI](https://mui.com/) - A popular React UI framework.
- [Chart.js](https://www.chartjs.org/) - JavaScript library for visualizing data in charts.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Next.JS](https://nextjs.org/) - React framework for server-side rendering and routing.
