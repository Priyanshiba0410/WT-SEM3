import React from 'react';

const MenuItem = ({ name, imageSrc, altText }) => (
  <div className="card">
    <div className="card__image">
      <img src={imageSrc} alt={altText} />
    </div>
    <div className="card__info">
      <div className="car__info--title">
        <h3>{name}</h3>
        <p>Fresh & sweet</p>
      </div>
      <div className="card__info--price">
        <p>$ 5</p>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
      </div>
    </div>
  </div>
);

const Menu = () => (
  <div className="container">
    <div className="art-board">
      <div className="art-board__container">
        <MenuItem
          name="Salad"
          imageSrc="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          altText="Salad"
        />
        <MenuItem
          name="Fish"
          imageSrc="https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          altText="Fish"
        />
        <MenuItem
          name="Pizza"
          imageSrc="https://images.pexels.com/photos/4001871/pexels-photo-4001871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          altText="Pizza"
        />
        <MenuItem
          name="Sushi"
          imageSrc="https://images.pexels.com/photos/792028/pexels-photo-792028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          altText="Sushi"
        />
        <MenuItem
          name="Dessert"
          imageSrc="https://images.pexels.com/photos/907142/pexels-photo-907142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          altText="Dessert"
        />
      </div>
    </div>
  </div>
);

export default Menu;
