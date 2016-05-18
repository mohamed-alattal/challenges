# API Challenge

## Use PostgreSQL

* http://www.postgresql.org/docs/9.4/static/

## To have the DB ready to test do

* createdb followprice_challenge

* psql followprice_challenge -f create_tables.sql

* psql followprice_challenge -f tables_test_data.sql

## The DB structure

* stores
    * id, int PK
    * name, text
    * url, text
    * creation_date, timestamp

* products
    * id, int PK
    * name, text
    * url, text
    * stores_id, int FK
    * creation_date, timestamp

* prices

    * id, int PK
    * products_id, int FK
    * creation_date, timestamp
    * value, double
    * currency text

## Using Node.js or Python

* Implement an endpoint that receives a product url and a price (ex: "120 €" or "120.00€") and stores the new price entry 

* Implement an endpoint that receives store url retrieves a list of products of that domain with:

    * product_id
    * minumum_price
    * maximum_price
    * number_of_prices

* Do an endpoint that receives product url and two integers A and B and retrieves the prices between Ath price and the Bth price inclusive (i.e. being A=1 and B=2 it should retrieve the last two prices of the product)
