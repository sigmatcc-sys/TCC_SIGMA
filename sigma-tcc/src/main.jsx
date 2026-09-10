// Importa o StrictMode do React
import { StrictMode } from "react";

// Importa a função responsável por renderizar a aplicação
import { createRoot } from "react-dom/client";

// Importa o sistema de rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa o Provider responsável por controlar o tema da aplicação
import { ThemeProvider } from "./context/ThemeContext";

// Importa o CSS global
import "./index.css";

// Importa as páginas
import Landing from "./pages/Landing";
import AuthChoice from "./pages/AuthChoice";
import ManagementLogin from "./pages/ManagementLogin";

// Login
import CompanyLogin from "./pages/AuthChoice/Company/CompanyLogin";
import ProfessionalLogin from "./pages/AuthChoice/Professional/ProfessionalLogin";
import UserLogin from "./pages/AuthChoice/User/UserLogin";

// Cadastro
import CompanyRegister from "./pages/AuthChoice/Company/CompanyRegister";
import ProfessionalRegister from "./pages/AuthChoice/Professional/ProfessionalRegister";
import UserRegister from "./pages/AuthChoice/User/UserRegister";

// Recuperação de senha
import CompanyForgotPassword from "./pages/ForgotPassword/CompanyForgotPassword";
import ProfessionalForgotPassword from "./pages/ForgotPassword/ProfessionalForgotPassword";
import UserForgotPassword from "./pages/ForgotPassword/UserForgotPassword";

import CompanyDashboard from "./pages/CompanyDashboard";
import CompanyAds from "./pages/CompanyAds";
import CompanyCreateAd from "./pages/CompanyCreateAd";
import CompanyMessages from "./pages/CompanyMessages";
import CompanyProfile from "./pages/Company/CompanyProfile";
import CompanyNotifications from "./pages/CompanyNotifications";

import ManagerDashboard from "./pages/ManagerDashboard";
import ManagerCompanies from "./pages/Manager/Companies";
import ManagerProfessionals from "./pages/Manager/Professionals";
import ManagerUsers from "./pages/Manager/Users";

import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import ProfessionalAds from "./pages/ProfessionalAds";
import ProfessionalCreateAd from "./pages/ProfessionalCreateAd";
import ProfessionalProfile from "./pages/Professional/ProfessionalProfile";
import ProfessionalNotifications from "./pages/ProfessionalNotifications";
import ProfessionalMessages from "./pages/ProfessionalMessages";
import ProfessionalCompanies from "./pages/Professional/ProfessionalCompanies";

import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/User/UserProfile";
import UserMessages from "./pages/UserMessages";
import UserSearch from "./pages/UserSearch";



// Renderiza a aplicação
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>

        <Routes>

          {/* Página Inicial */}
          <Route
            path="/"
            element={<Landing />}
          />

          {/* Escolha entre Login e Cadastro */}
          <Route
            path="/auth/company"
            element={<AuthChoice />}
          />

          <Route
            path="/auth/professional"
            element={<AuthChoice />}
          />

          <Route
            path="/auth/user"
            element={<AuthChoice />}
          />

          {/* Gestão */}
          <Route
            path="/management-login"
            element={<ManagementLogin />}
          />

          {/* Login */}
          <Route
            path="/company-login"
            element={<CompanyLogin />}
          />

          <Route
            path="/professional-login"
            element={<ProfessionalLogin />}
          />

          <Route
            path="/user-login"
            element={<UserLogin />}
          />

          {/* Cadastro */}
          <Route
            path="/company-register"
            element={<CompanyRegister />}
          />

          <Route
            path="/professional-register"
            element={<ProfessionalRegister />}
          />

          <Route
            path="/user-register"
            element={<UserRegister />}
          />

          {/* Recuperação de Senha */}
          <Route
            path="/company-forgot-password"
            element={<CompanyForgotPassword />}
          />

          <Route
            path="/professional-forgot-password"
            element={<ProfessionalForgotPassword />}
          />

          <Route
            path="/user-forgot-password"
            element={<UserForgotPassword />}
          />

          <Route
            path="/company-dashboard"
            element={<CompanyDashboard />}
          />

          <Route
            path="/company-ads"
            element={<CompanyAds />}
          />

          <Route
            path="/company-ads/create"
            element={<CompanyCreateAd />}
          />

          <Route
            path="/company-messages"
            element={<CompanyMessages />}
          />

          <Route
            path="/company-profile"
            element={<CompanyProfile />}
          />

          <Route
            path="/company-notifications"
            element={<CompanyNotifications />}
          />

          <Route
            path="/manager-dashboard"
            element={<ManagerDashboard />}
          />

          <Route
            path="/manager-companies"
            element={<ManagerCompanies />}
          />

          <Route
            path="/manager-professionals"
            element={<ManagerProfessionals />}
          />

          <Route
            path="/manager-users"
            element={<ManagerUsers />}
          />

          <Route
            path="/professional-dashboard"
            element={<ProfessionalDashboard />}
          />

          <Route
            path="/professional-ads"
            element={<ProfessionalAds />}
          />

          <Route
            path="/professional-ads/create"
            element={<ProfessionalCreateAd />}
          />

          <Route
            path="/professional-profile"
            element={<ProfessionalProfile />}
          />

          <Route
            path="/professional-messages"
            element={<ProfessionalMessages />}
          />

          <Route
            path="/professional-notifications"
            element={<ProfessionalNotifications />}
          />

          <Route
            path="/professional-companies"
            element={<ProfessionalCompanies />}
          />

          <Route
            path="/user-dashboard"
            element={<UserDashboard />}
          />

          <Route
            path="/user-profile"
            element={<UserProfile />}
          />

          <Route
            path="/user-messages"
            element={<UserMessages />}
          />

          <Route
            path="/user-search"
            element={<UserSearch />}
          />

        </Routes>



      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);