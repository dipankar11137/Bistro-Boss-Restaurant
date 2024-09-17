const MenuItem = ({ item }) => {
  return (
    <div className="flex space-x-2">
      <div>
        <img
          style={{ borderRadius: '0 200px 200px 200px' }}
          className="w-[100px] h-[75px]"
          src={item?.image}
          alt=""
        />
      </div>
      <div>
        <h3 className="uppercase">{item?.name} ----------</h3>
        <p>{item?.recipe}</p>
      </div>
      <p className="text-yellow-500">$ {item?.price}</p>
    </div>
  );
};

export default MenuItem;
