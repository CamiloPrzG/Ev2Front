import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(90deg, #145374, #5588aa)', // Degradado azul
          paddingY: 2, // Espaciado vertical para mayor altura
        }}
      >
        <Toolbar
          sx={{
            minHeight: '150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Sección superior: Logo y menú */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <img
              src="/images/Logo.png"
              alt="Logo"
              style={{ height: '100px', width: 'auto' }}
            />

            {/* Botón hamburguesa solo en móviles */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Button onClick={toggleMobileMenu} color="inherit">
                <MenuIcon />
              </Button>
            </Box>

            {/* Menú normal solo en desktop, menú hamburguesa en móviles */}
            <Box
              className={mobileMenuOpen ? 'nav nav-mobile-open' : 'nav'}
              sx={{
                display: { xs: mobileMenuOpen ? 'flex' : 'none', md: 'flex' },
                gap: 2,
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'flex-start', md: 'center' },
                position: { xs: 'absolute', md: 'static' },
                top: { xs: 80, md: 'auto' },
                right: { xs: 20, md: 'auto' },
                background: { xs: 'rgba(20,83,116,0.98)', md: 'none' },
                padding: { xs: 2, md: 0 },
                borderRadius: { xs: 2, md: 0 },
                zIndex: 10,
              }}
            >
              <Button color="inherit" onClick={handleClick}>
                Municipalidad
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <MenuItem onClick={() => handleNavigate('/municipalidad')}>
                  La Municipalidad
                </MenuItem>
                <MenuItem onClick={() => handleNavigate('/alcalde')}>
                  El Alcalde
                </MenuItem>
                <MenuItem onClick={() => handleNavigate('/concejo')}>
                  Concejo Municipal
                </MenuItem>
                <MenuItem onClick={() => handleNavigate('/plan-regulador')}>
                  Plan Regulador
                </MenuItem>
              </Menu>

              <Button color="inherit" onClick={() => navigate('/servicios')}>
                Servicios
              </Button>
              <Button color="inherit" onClick={() => navigate('/contacto')}>
                Contacto
              </Button>
            </Box>
          </Box>

          {/* Título y subtítulo centrados */}
          {/* Título y subtítulo centrado absolutamente sobre el AppBar */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              pointerEvents: 'none',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
              Bienvenido a la Municipalidad
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>
              Cholchol avanza contigo
            </Typography>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
