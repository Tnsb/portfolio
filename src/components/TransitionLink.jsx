import { Link, useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

function allowClientNav(e) {
  if (e.defaultPrevented) return false;
  if (e.button !== 0) return false;
  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return false;
  return true;
}

export function TransitionLink({ to, replace, state, preventScrollReset, relative, reloadDocument, onClick, ...props }) {
  const navigate = useNavigate();

  function handleClick(e) {
    onClick?.(e);
    if (!allowClientNav(e) || reloadDocument) return;

    e.preventDefault();
    const opts = { replace, state, preventScrollReset, relative };
    const go = () => flushSync(() => navigate(to, opts));

    if (typeof document !== "undefined" && document.startViewTransition) {
      document.startViewTransition(go);
    } else {
      go();
    }
  }

  return (
    <Link
      to={to}
      replace={replace}
      state={state}
      preventScrollReset={preventScrollReset}
      relative={relative}
      onClick={handleClick}
      {...props}
    />
  );
}
