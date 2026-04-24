# Guide d'Implémentation des Graphiques (Dashboard Médical)

Ce guide explique comment reproduire les graphiques présents dans le sujet de test en utilisant **Chart.js** et **React-Chartjs-2**.

## 1. Installation des dépendances

Commencez par installer les bibliothèques nécessaires :

```bash
npm install chart.js react-chartjs-2
```

## 2. Configuration de base (Enregistrement)

Dans Next.js, vous devez enregistrer les modules de Chart.js pour qu'ils fonctionnent :

```javascript
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
```

---

## 3. Méthode par type de graphique

### A. Le Graphique Linéaire (Health Report Pending)
Pour obtenir l'effet de courbe lisse et les points mis en évidence :

*   **Type :** `Line`
*   **Options Clés :**
    *   `tension: 0.4` : Pour rendre la ligne courbée (smooth).
    *   `pointRadius: 6` : Pour agrandir les points sur la ligne.
    *   `pointBackgroundColor: '#fff'` : Pour l'intérieur blanc des points.
    *   `fill: true` : Pour ajouter une couleur sous la ligne (effet dégradé).

### B. Le Graphique à Barres (Patient Health Report)
Pour reproduire les barres arrondies et l'effet de sélection (Lundi) :

*   **Type :** `Bar`
*   **Options Clés :**
    *   `borderRadius: 20` : Pour l'effet "Pill" (bout arrondi).
    *   `barThickness: 15` : Pour contrôler la largeur des barres.
    *   **Logique de Couleur :** Utilisez une fonction pour définir la couleur : bleu foncé pour l'élément actif, et bleu très clair pour les autres.

### C. Le Graphique Donut (Health Trend)
Pour la progression circulaire (85%) :

*   **Type :** `Doughnut`
*   **Options Clés :**
    *   `cutout: '80%'` : Pour rendre l'anneau très fin.
    *   `circumference: 360` : Pour un cercle complet.
    *   **Plugin Texte Central :** Vous devrez ajouter un petit morceau de code pour dessiner le "85%" au milieu du cercle.

---

## 4. Astuces pour le Design Premium

1.  **Gradients :** Ne pas utiliser de couleurs simples comme `"blue"`. Utilisez `ctx.createLinearGradient()` pour créer un passage du bleu foncé au bleu clair.
2.  **Ombres :** Ajoutez l'option `shadowColor` et `shadowBlur` dans les propriétés du dataset (nécessite parfois un plugin simple).
3.  **Désactivation des Axes :** Pour un look moderne, cachez les lignes de grille inutiles :
    ```javascript
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false }, ticks: { display: false } }
    }
    ```
