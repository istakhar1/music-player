export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    nowPlaying:{name:'Not Checked',albumArt:''},
    // remove token after devlopment and set it to null
    token:"BQBZlWv8MjIjznH4nUOSTBhpnMeh8A0u3bvXl1HiCkeooEeEtXbwWpD8zoayuSHK1HKJkKzq_-Ixdk6jbwzPjkdfK0XJdYhg8Krozo_OnVmEAz2ehvnPEIooJNcrn7Th6XZo3wS7xstlHsMgw-w_IAf27LWUbsZcEegHZ4_YEIuQPgAUrNl4",

};

const reducer =(state,action) => {
console.log(state,action);

//action type and payload

switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user:action.user,
            // item:action.item,
        };
    case 'SET_TOKEN':
        return {
            ...state,
            token:action.token
        };
    case 'SET_PLAYLISTS':
        return {
          ...state,
          playlists:action.playlists
        };
    case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly:action.discover_weekly,
        }
    case "PLAYING_MUSIC":
        return {
            ...state,
            nowPlaying:action.nowPlaying,
        }

    default:
        return state;
}

}

export default reducer;