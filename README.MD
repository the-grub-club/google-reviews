# Project Name

> Dynamically generate a google reviews module displaying diner experiences for a restaurant review application

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

- Node 6.13.0
- Database : Version
- Express ^4.16.4
- React ^16.8.6
- React DOM ^16.8.6


### Installing Dependencies

From within the root directory:

- [ ] `npm install`
- [ ] `npm run react-dev` to run the pre-configured webpack
- [ ] `npm start` to run the json-server

## Available API Routes

| Endpoint                                    | Type   | Operation           |
|---------------------------------------------|--------|---------------------|
| `/api/restaurants/:id/googlereviews`        | GET    | Get all reviews     |
| `/api/restaurants/:id/googlereviews`        | POST   | Create/Add a review |
| `/api/restaurants/:id/googlereviews/review` | PUT    | Update a review     |
| `/api/restaurants/:id/googlereviews/review` | DELETE | Remove a review     |