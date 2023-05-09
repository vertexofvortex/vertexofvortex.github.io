import { MainContent } from "../../components";

export function ErrorPage() {
  return (
    <MainContent>
      <div className="cmd">
        <span style={{ color: "var(--vim-vimCommand)" }}>
          {`\ue654`} An error occured. Look into the browser console
        </span>
      </div>
    </MainContent>
  );
}

export default ErrorPage;
