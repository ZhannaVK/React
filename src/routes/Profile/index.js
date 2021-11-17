import { withProfile } from "../../hocs/withProfile";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    input: { marginLeft: theme.spacing(2), },
}));

export const ProfileRender = ({ isCheck, toggleShowProfile }) => {
    const classes = useStyles();
    return (
        <div>
            <h1>PROFILE</h1>

            <input type="checkbox" className={classes.input} checked={isCheck} onChange={toggleShowProfile} />
        </div>
    );
};

export const Profile = withProfile(ProfileRender);
