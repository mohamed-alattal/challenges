create table stores (
	id int primary key, 
	name text not null, 
	url text not null, 
	creation_date timestamp not null
	);

create table products (
	id int primary key, 
	name text not null, 
	url text not null, 
	stores_id int references stores(id) not null, 
	creation_date timestamp not null
	);

create table prices (
	id int primary key, 
	products_id int references products(id) not null, 
	creation_date timestamp not null, 
	value decimal(17,2) not null, -- df: alpha=175.30 
	currency text not null -- df: pattern=EUR|USD
	);
