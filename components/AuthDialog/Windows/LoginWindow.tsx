import React from 'react';
import {WindowTypes} from "../index";
import {Alert, Button, Typography} from "@mui/material";
import {FormProvider, useForm} from 'react-hook-form';
import {validateLoginSchema} from "../../../utils/validators";
import {yupResolver} from "@hookform/resolvers/yup";
import styles from '../AuthDialog.module.scss'
import InputField from "../FormElements/InputField";
import {useAppDispatch, useTypedSelector} from "../../../redux/hooks";
import {userLoginThunk} from "../../../redux/user/user.actions";
import {RequestAuthUser} from "../../../utils/types";

interface LoginWindowProps {
    setActiveWindow: (type: WindowTypes) => void
}

export const LoginWindow: React.FC<LoginWindowProps> = ({setActiveWindow}) => {
    const dispatch = useAppDispatch()
    const {message ,loading} = useTypedSelector((state) => state.user)

    const form = useForm<RequestAuthUser>({
        mode:"onChange",
        resolver:yupResolver(validateLoginSchema),
        reValidateMode:"onChange"
    })
    const onSubmit = (data: RequestAuthUser) => {
        dispatch(userLoginThunk(data))
    }

    return (
            <FormProvider {...form}>
                <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
                    {
                        (message && !loading) && <Alert severity="error">{message}</Alert>
                    }
                    <InputField name={"username"}
                                label={"Username"}
                                placeholder={"Enter your username or email..."}/>
                    <InputField name={"password"}
                                label={"Password"}
                                placeholder={"Enter your password..."}/>
                    <Button variant="contained"
                            color="primary"
                            type="submit"
                            disabled={!(form.formState.isValid && form.formState.isDirty)}
                    >
                        Log in
                    </Button>
                    <Typography variant={"inherit"} className={styles.titleChangeWindow} onClick={() => setActiveWindow("__REGISTER__")}>Register</Typography>
                </form>
            </FormProvider>
    );
};

