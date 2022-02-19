# E-commerce backend

E-commerce back end is a program that allows a manager to view and update their inventory through the terminal

## Installation

First, it is necessary to create the initialize the data database using the command

```bash
mysql -u root -p
```
Then int is necessary to create the data base using the command
```bash
source schema.sql
```
next, the database must be seeded using the command 
```bash
npm run seed
```
finally it is necessary to run the program using the command
```bash
nodemon server.js
```


## Usage

In Insomnia the user can gan check all of the categories, products and tags of his inventory.
To to this the user must enter the e-commerce folder and the select the categories, product or, tags subfolder. 

once in ant of these folders the user can check all of a category bey selecting `get all`.  The can look at an individual item by looking at `get by id`. A new entry can be made using the `post` option. An a catagory can be updated using the `put`

Despite lots of effort on my part and that of my tutor and my course TA, some of the functionality was never able to operate correctly.
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)