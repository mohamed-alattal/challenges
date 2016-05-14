#(F2) Send a Campaign by Product
One of Followprice's main features for stores is the possibility of sending directed campaign to the stores' followers. The store creates a coupon code in its own system and then use followprice to send it to the followers of a given category of products (multiple categories or even all followers).

For this challenge Followprice wants you to extend the existing feature to be able to send directed campaigns by product.

##Problem
*Use case*: FNAC wants to make a campaign for the "FIFA2016" that has 124 followers waiting for a price drop and the next edition will released soon, so its the perfect time, probably the last opportunity to convert some followers into buyers. At this moment its only possible to create a campaign for "video games" which is useless for this case.

Take in consideration:
* Use your UX/UI skills to find the best way to make it easy to send direct campaigns by category or product whenever the user wants.
* It has to be possible to send to multiple specific products (example: "FIFA2016" and "PES2016").
* Since sending a campaign is something huge, there is the need of a confirmation. At the moment we use a modal to confirm the intentio of the user sending that campaign with that data.
* Frontend form validation is needed. Proper feedback messages are valued.
* In the end, an AJAX call with the campaign data should be sent to nowhere.

Feel free to explore the Followprice Store App and make your challenge fit better into it:
* Store app URL: http://stage.followprice.co:8080/
* Login: please ask us

##Background Information

The form fields are:
* __Campaign name__
* __Coupon code__
* __Discount amount__ (by value or percentage)
* __Expiration date__
* __Target__ (selected categories and/or products)
* Minimum purchase value *(optional)*
* Limit of times user can use the code *(optional)*
* Footer notes *(optional)*

An campaign must generate an form data to send like the following one:
```
  title:Audio e Cacifos 10
  code:AUDIOCACI2016
  categories:Audiovisuais;Cacifos
  discountValue:10
  discountType:relative
  expirationDate:31/05/2016
  minimumValue:100
  limit:1
  footer: 
```



## Other Requirements
Altough our challenges are technology agnostic and you are free to use whatever you want, we strongly recommend to use the techs we use on our stack and solutions with it will be valued

In this challenge we recomend you to create a simple React Component (or more than one if you think it would make sense)
