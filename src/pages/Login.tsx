import styled from "styled-components";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import { login } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { SignupProps } from "./Signup";
import { useAuthStore } from "../store/authStore";

const Login = () => {
    const navigate = useNavigate();
    const showAlert = useAlert();

    const {storeLogin} = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps)=>{
        login(data).then((res)=>{
            // 성공
            storeLogin(res.token);
            showAlert('로그인이 완료되었습니다.')
            navigate("/")
        }, (error)=>{
            showAlert('로그인이 실패하였습니다.')
        })
    }

    return (
        <>
            <Title size="large">로그인</Title>
            <LoginStyle>
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
                        <InputText
                            inputType="password" 
                            placeholder="비밀번호"
                            {...register("password",{required:true})}/>
                            {errors.password && <p className="error-text">
                                비밀번호을 입력해주세요.</p>}
                    </fieldset>
                    <fieldset>
                        <Button type="submit" size="medium" scheme="primary">
                            로그인
                        </Button>
                    </fieldset>
                    <div className="info">
                        <Link to="/reset">비밀번호 초기화</Link>
                    </div>
                    <div className="info">
                        <Link to="/signup">회원가입</Link>
                    </div>
                </form>
            </LoginStyle>
        </>
    );
}

export const LoginStyle = styled.div`
    max-width: ${({ theme }) => theme.layout.width.small};
    margin: 80px auto;

    fieldset {
        border: 0;
        padding: 0 0 8px 0;
        .error-text {
            color: red;
        }
    }

    input {
        width: 100%;
    }

    button {
        width: 100%;
    }

    .info {
        text-align: center;
        padding: 16px 0 0 0;
    }
`

export default Login;
