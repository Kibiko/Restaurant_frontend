import FavouritesList from "./FavouritesList";

const SideBar = ({show ,favourites, deleteFromFav}) => {
  //    11 mins 50 tells you about react icons


  return (
    <div className={show ? 'sidenav active':'sidenav'}>
        <h4 className="sidebar-title">Favourites</h4>
        <FavouritesList className="favouriteList" favourites={favourites} deleteFromFav = {deleteFromFav} />
    </div>
  );
}
export default SideBar;