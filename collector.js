// Here we can see we start the class similar to how we would with the function keyword but instead we will use the class keyword. Next we name our class based on the individual item it is to represent, in our case Collectible. It is important to notice that the class name is always capitalized, this helps from a conventional standpoint to remind us when we are using that class name that it is a reference to the class itself as opposed to possibly an instance of the class we might use elsewhere.

// Another thing worth noticing is the this keyword. The this keyword always refers to the object it belongs to. You can remember that the this keyword is a reference to whatever is to the left of the '.' at call time. For example if we had a collectible named 'coin', and I was accessing its title I would say 'coin.title', in this case the coin would be the this which is being referred to.

// Aside from properties added during our object construction we may wish to provide certain functionalities of the object to allow for certain behaviors tied to each object.

// For example if we wanted to handle adding and removing of tags from inside the class we can add a method. Methods are the functions that are tied to a specific object. Syntactically they are similar to functions, however we will not be using the function keyword. Lets look at an example of how we could add the ability to add and remove tags to our Collection class:
class collectable {
  constructor(image, title, description, rarity, tags) {
    this.image = image
    this.title = title
    this.description = description
    this.rarity = rarity
    this.tags = tags
  }

  addTag(tag) {
    this.tags.push(tag)
  }
  removeTag(tag) {
    this.tags.splice(this.tags.indoexof(tag), 1)
  }
}