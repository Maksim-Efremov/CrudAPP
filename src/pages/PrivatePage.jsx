import { Button } from "../components/button";

export const PrivatePage = ({ onLogout }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>This is a protected area. Only logged-in users can see this.</p>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};
