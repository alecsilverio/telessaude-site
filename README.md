# Telessaúde Três Lagoas - MS
## Plataforma Informativa | Março 2026

**Grupo 4 PET-Saúde Digital e Informação**  
*Telessaúde e Sistemas de Informação em Saúde*  
**IFMS Três Lagoas | PET-Saúde MS**

---

## 📋 Resumo Executivo

Site institucional desenvolvido para esclarecer o funcionamento da telemedicina no SUS de Três Lagoas/MS, detalhando o fluxo regulatório completo desde a UBS até as unidades executantes (CEM, CAPS, Clínica da Criança).

### Objetivos Estratégicos
- **Educação em Saúde**: Democratizar informações sobre telemedicina SUS
- **Transparência Assistencial**: Divulgar fluxo regulatório SISREG e especialidades
- **Integração Intergrupos**: Apresentar Portal da Transparência (Grupo PET 7)
- **Acessibilidade Digital**: Interface responsiva + linguagem simples (Lei 15.263/2025)

## 🏥 Especialidades por Unidade Executante

| Unidade | Especialidades | Modalidade | Plataforma |
|---------|----------------|------------|------------|
| **CEM** | Neurologia<br>Endocrinologia | Teleconsulta | TopMed/Fiocruz |
| **CAPS**<br>(Saúde Mental) | Psicologia<br>Psiquiatria | Teleconsulta | TopMed/Fiocruz |
| **Clínica da Criança** | Neuropediatria | Teleconsulta | TopMed/Fiocruz |

## 🗺️ Arquitetura da Plataforma
┌─ 🏠 Hero Section (Introdução + CTA)
├─ 🔄 Fluxo Regulatório (6 Etapas SISREG)
│ ├── 01 UBS → 02 Encaminhamento → 03 Regulação
│ └── 04 Teleconsulta → 05 Conduta → 06 Retorno
├─ ❓ FAQ (8+ perguntas frequentes)
├─ 📊 Portal Transparência (Grupo PET 7)
└─ 👥 Equipe & Créditos (Grupo PET 4)

## 🔧 Stack Tecnológica
Frontend Framework: HTML5 | CSS3 | Vanilla JavaScript
Design System: CSS Grid | Flexbox | CSS Custom Properties
Responsividade: Mobile-First (320px - 4K UHD)
Performance: Lazy Loading | Optimized Assets
Acessibilidade: WCAG 2.1 AA | ARIA Labels
Versionamento: Git + GitHub Flow
Deploy: GitHub Pages (CDN Global)


## ✨ Funcionalidades Implementadas

| Componente | Descrição | Benefício |
|------------|-----------|-----------|
| **Navbar Fixa** | Sticky + Scroll suave | Navegação intuitiva |
| **Loader Animado** | Jacaré TL + Skeleton screens | UX fluida |
| **Fluxograma** | 6 passos interativos | Visualização processo |
| **FAQ Dinâmico** | `<details>/<summary>` | Reduz cliques |
| **Cards Visuais** | Grid responsivo | Legibilidade máxima |

## 🔗 Recursos Integrados

**[Portal da Transparência da Regulação em Saúde](https://sisreg-transparencia.treslagoas.ms.gov.br/)**  
*Grupo PET 7 - Interoperabilidade Sistemas de Informação em Saúde*

## 🚀 Instruções de Deploy

```bash
# Clonar repositório
git clone https://github.com/alecsilverio/telessaude-site.git
cd telessaude-site

# Visualizar localmente
# Abrir index.html no navegador

# Deploy GitHub Pages (branch gh-pages)
git push origin main
```

**Live Demo:** [https://alecsilverio.github.io/telessaude-site](https://alecsilverio.github.io/telessaude-site)

## 📊 Métricas de Desenvolvimento

| Métrica | Valor |
|---------|-------|
| **Tempo Total** | 3 semanas (Mar/2026) |
| **Componentes** | 12+ (Hero, Steps, FAQ, etc) |
| **Breakpoints** | 5 (Mobile, Tablet, Desktop, HD, 4K) |
| **Performance** | Lighthouse 95+ |
| **Acessibilidade** | WCAG AA |

## 👥 Equipe de Desenvolvimento

**Coordenador:** Alexandre Silvério (PET TL)  
**Desenvolvimento:** Grupo 4 PET-Saúde Digital  
**Design:** PET-Saúde Informação Três Lagoas/MS  
**Validação:** Lidiane Gaspareli + Equipe CEM

## 📄 Licença & Reconhecimento

**Licença:** MIT License  
**Período:** Janeiro-Março 2026  
**Financiamento:** PET-Saúde MS (MEC/MS)  
**Instituição:** IFMS Campus Três Lagoas

---
*Plataforma desenvolvida no âmbito do Programa de Educação Tutorial em Saúde (PET-Saúde)*
*Conforme Lei Federal nº 15.263/2025 (Linguagem Simples)*