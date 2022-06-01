import React from "react";
import * as axios from "axios";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user_img.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <div className={classes.usersBody}>
            {

                this.props.users.map(u => <div className={classes.usersBodyList} key={u.id}>

                    <span>
                        <div>
                            <img className={classes.photo} src={
                                u.photos.small != null ? u.photos.small : userPhoto
                            } alt="AVA" />
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}
                                    >Un Follow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users;