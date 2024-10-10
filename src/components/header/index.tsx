import logoCart from '../../assets/cart.svg';

export const Header = () => {
  return (
    <header>
      <input type="text" placeholder="Procure pelo seu lanche" />
      <img src={logoCart} alt="Logo do carrinho de compras" />
    </header>
  );
};
