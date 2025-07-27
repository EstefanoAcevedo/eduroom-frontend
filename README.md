<h1 align="center">
<p align="center">
  <img src="public/EduRoom_logo_transparent.png" width="300px" style="filter: brightness(0) invert(1)" />
</p>
</h1>

<p align="center">Una aplicación web para la gestión de inscripciones y asistencias educativas.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Estado-En%20Desarrollo-yellow" alt="Estado" />
  <img src="https://img.shields.io/badge/Lenguaje-TypeScript-blue" alt="Lenguaje" />
</p>

---

## 📋 Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Instalación](#instalación)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

---

## 🧩 Descripción General

**EduRoom** es un sistema de gestión de inscripciones y asistencias desarrollado como una *Single Page Application* utilizando Angular en su versión 20.0.2. Integra Bootstrap para el diseño visual y Apache ECharts para la generación de gráficos dinámicos e interactivos. El proyecto está en desarrollo y está pensado para ser modular, escalable y fácil de mantener.

---

## ⚙️ Instalación

### 🔸 Requisitos Previos

- Tener instaladas las siguientes tecnologías:
  - [Node.js](https://nodejs.org/)
  - [Angular CLI](https://angular.io/cli)
  - [Git](https://git-scm.com/)
  - [Visual Studio Code](https://code.visualstudio.com/) (opcional, recomendado)

### 🔸 Instalación

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/edu-room.git
cd edu-room
```

Instala las dependencias:
```bash
npm install
```

Ejecuta el servidor y abre la aplicación:
```bash
ng s --o
```

---

## 🛠️ Tecnologías Utilizadas
| Paquete         | Versión  | Descripción                           |
| --------------- | -------- | ------------------------------------- |
| `@angular/core` | ^20.0.0  | Framework base para la aplicación SPA |
| `typescript`    | \~5.8.2  | Lenguaje principal del proyecto       |
| `bootstrap`     | ^5.3.7   | Estilos responsivos y componentes UI  |
| `echarts`       | ^5.6.0   | Apache ECharts para gráficos interactivos  |
| `ngx-echarts`   | ^20.0.1  | Integración de ECharts con Angular    |
| `rxjs`          | \~7.8.0  | Programación reactiva con Observables |
| `@angular/cli`  | ^20.0.2  | Herramientas de desarrollo y build    |
