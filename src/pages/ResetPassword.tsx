import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import { resetPassword, resetRequest } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { SignupProps, SignupStyle } from "./Signup";
import { useState } from "react";

const ResetPassword = () => {
    const navigate = useNavigate();
    const {showAlert} = useAlert();
    const [resetRequested, setResetRequested] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps)=>{
        if(resetRequested){
            resetPassword(data).then(()=>{
                showAlert("비밀번호 초기화되었습니다.");
                navigate("/login");
            })
            
        } else {
            resetRequest(data).then(()=>{
                setResetRequested(true);
            })
        }
    }

    console.log(errors)

    return (
        <>
            <Title size="large">회원가입</Title>
            <SignupStyle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <InputText 
                            inputType="email" 
                            placeholder="이메일"
                            {...register("email",{required:true})}/>
                            {errors.email && <p className="error-text">
                                이메일을 입력해주세요.</p>}
                    </fieldset>
                    <fieldset>
                        {resetRequested &&
                            <>
                                <InputText
                                    inputType="password" 
                                    placeholder="비밀번호"
                                    {...register("password",{required:true})}/>
                                {errors.password && <p className="error-text">
                                    비밀번호을 입력해주세요.
                                </p>}
                            </>}
                    </fieldset>
                    <fieldset>
                        <Button type="submit" size="medium" scheme="primary">
                            {resetRequested ? "비밀번호 초기화": "초기화 요청"}
                        </Button>
                    </fieldset>
                </form>
            </SignupStyle>
        </>
    );
}

export default ResetPassword;
