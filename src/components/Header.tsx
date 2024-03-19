const Header = (props: { title: string }) => {
  return (
    <header>
      <h1 className='font-bold text-lg'>{props.title}</h1>
    </header>
  );
};

export default Header;
