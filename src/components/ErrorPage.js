import React from 'react';

const ErrorPage = ({ error }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-600">Error: {error.message}</p>
      {/* You can add more information or styling as needed */}
    </div>
  );
};

export default ErrorPage;
