import React from 'react';
import {Alert, Button} from '@mui/material';
import {WindowTypes} from "../index";
import InputField from "../FormElements/InputField";
import {FormProvider} from "react-hook-form";
import {useAppDispatch, useTypedSelector} from "../../../redux/hooks";
import {RequestCreateUser} from "../../../utils/types";
import {yupResolver} from "@hookform/resolvers/yup";
import {validateRegisterSchema} from "../../../utils/validators";
import {userRegisterThunk} from "../../../redux/user/user.actions";
import styles from "../AuthDialog.module.scss";
import {useForm} from "react-hook-form";

interface RegisterWindowProps {
    setActiveWindow: (type: WindowTypes) => void
}

export const RegisterWindow: React.FC<RegisterWindowProps> = ({setActiveWindow}) => {
    const dispatch = useAppDispatch()
    const {loading,message} = useTypedSelector((state) => state.user)

    const form = useForm<RequestCreateUser>({
        mode:"onChange",
        resolver: yupResolver(validateRegisterSchema),
        reValidateMode:"onChange"
    })
    const onSubmit = (data: RequestCreateUser) => {
        dispatch(userRegisterThunk(data))
    }
    return (
           <FormProvider {...form}>
               <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>

                    {
                        (message && !loading) && <Alert severity="error">{message}</Alert>
                    }
                    <InputField name={"email"}
                                label={"email"}
                                type={"text"}
                                placeholder={"Enter your email..."}/>

                    <InputField name="username"
                                label="Username"
                                type="text"
                                placeholder={"Enter your username..."}/>
                    <InputField name="password"
                                label="Password"
                                type="password"
                                placeholder={"Enter your password..."}/>

                    <Button variant="contained" type="submit"
                            disabled={!(form.formState.isValid && form.formState.isDirty)}>
                        Create Account
                    </Button>
                    </form>
            </FormProvider>
    );
};
