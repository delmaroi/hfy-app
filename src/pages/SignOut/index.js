import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function SignOut() {
  const { state } = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    push(state?.from || "/sign-in");
  }, []);

  return null;
}
