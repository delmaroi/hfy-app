import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function SignOut() {
  const { replace } = useHistory();

  useEffect(() => {
    replace("/sign-in");
  }, []);

  return null;
}
