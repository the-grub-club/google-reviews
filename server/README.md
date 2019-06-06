[] GET all reviews for one restaurant

URL:
    `/api/restaurants/:id/googlereviews`

Method:
    GET

URL Params:
    Required:
        id=[integer]

Data Params:
    None

Success Response:
Code: 200
Content: {
    reviewer: string,
    date: string,
    picture: string (url),
    review: string,
    restaurantName: string
    restaurantId: number
}

Error Response:
    Code: 500
    Content: error

Sample Call:
 $.ajax({
      type: 'GET',
      url: `/api/restaurants/${pathId}/googlereviews`,
      success: (data) => {
        this.setState({
          current: data,
        });
      },
    });

[] POST a review for one restaurant

URL:
    `/api/restaurants/:id/googlereviews`

Method:
    POST

URL Params:
    Required:
        id=[integer]

Data Params:
    None

Success Response:
    Code: 200
    Content: {
        reviewer: string,
        date: string,
        picture: string (url),
        review: string,
        restaurantName: string
        restaurantId: number
    }

Error Response:
    Code: 500
    Content: error

Sample Call:
 $.ajax({
    type: 'POST',
    url: `/api/restaurants/${pathId}/googlereviews`,
    data: {
        reviewer: string,
        date: string,
        picture: string (url),
        review: string,
        restaurantName: string
        restaurantId: number
    },
    datatype : "application/json"
    success: (data) => {
        this.setState({
        current: data,
        });
    },
    });

[] Update a review for one restaurant

URL:
    `/api/restaurants/:id/googlereviews`

Method:
    PUT

URL Params:
    Required:
        id=[integer]

Data Params:
    None

Success Response:
    Code: 200
    Content: {
        reviewer: string,
        date: string,
        picture: string (url),
        review: string,
        restaurantName: string
        restaurantId: number
    }

Error Response:
    Code: 500
    Content: error

Sample Call:
 $.ajax({
    type: 'PUT',
    url: `/api/restaurants/${pathId}/googlereviews`,
    data: {
        reviewer: string,
        date: string,
        picture: string (url),
        review: string,
        restaurantName: string
        restaurantId: number
    },
    datatype : "application/json"
    success: (data) => {
        this.setState({
        current: data,
        });
    },
    });

[] Delete a review for one restaurant

URL:
    `/api/restaurants/:id/googlereviews`

Method:
    DELETE

URL Params:
    Required:
        id=[integer]

Data Params:
    None

Success Response:
    Code: 200
    Content: {
        reviewer: string,
        date: string,
        picture: string (url),
        review: string,
        restaurantName: string
        restaurantId: number
    }

Error Response:
    Code: 500
    Content: error

Sample Call:
 $.ajax({
    type: 'DELETE',
    url: `/api/restaurants/${pathId}/googlereviews`,
    data: {
        reviewer: string,
        date: string,
        picture: string (url),
        review: string,
        restaurantName: string
        restaurantId: number
    },
    datatype : "application/json"
    success: (data) => {
        this.setState({
        current: data,
        });
    },
    });