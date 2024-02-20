import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tokenService from "../../core/services/tokenService";
import toastr from "toastr";

type Props = {
    children:ReactElement
}

const PrivateRoute = (props: Props) => {
    const navigate = useNavigate();
    const [isSafe, setIsSafe] = useState(false);
    useEffect(() => {
      if (tokenService.hasToken()) {
        setIsSafe(true);
      }
      else {
        toastr.warning("Önce giriş yapmalısınız.")
        navigate('/giris')
      }
    })
  return (
    <>
    {isSafe?props.children:null}
    </>
  )
}

export default PrivateRoute