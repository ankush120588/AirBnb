# AirBnbClone — Full-Stack Property Listing & Review App

A full-stack Airbnb-inspired web application built with Node.js, Express, MongoDB, Mongoose, and EJS. Users can browse property listings, view detailed stay pages, create, edit, and delete listings, and post or remove property reviews.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database & ODM:** MongoDB, Mongoose
- **Templating & Frontend:** EJS, HTML5, CSS3
- **Validation:** Joi

## Project Structure

```text
AirBnb/
├── classroom/          # Express routing practice modules
├── init/
│   ├── data.js         # Sample property listing dataset
│   └── index.js        # Database seeding script
├── models/
│   ├── listing.js      # Mongoose Listing schema and model
│   └── review.js       # Mongoose Review schema and model
├── public/
│   └── css/
│       └── style.css   # Custom application styles
├── views/
│   ├── includes/       # Reusable navbar and footer partials
│   ├── layouts/        # Main EJS boilerplate layout
│   └── listings/       # Index, show, new, and edit listing templates
├── app.js              # Express server, middleware, and CRUD routes
├── schema.js           # Joi server-side validation schemas
├── package.json
└── package-lock.json
