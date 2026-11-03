import { useState } from 'react';
import { themeClass } from './styles/theme.css';
import { Button } from './components/Button/Button';
import { Badge } from './components/Badge/Badge';
import { Card } from './components/Card/Card';
import * as styles from './App.css';

export default function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className={`${themeClass} ${styles.appContainer}`}>
      <h1>Exercise 2: Component Library (Vanilla Extract)</h1>

      {/* Button Component Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Button Component</h2>

        <p>Variants:</p>
        <div className={styles.row}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>

        <p style={{ marginTop: '12px' }}>Sizes:</p>
        <div className={styles.row}>
          <Button size="small">Small Button</Button>
          <Button size="large">Large Button</Button>
        </div>

        <p style={{ marginTop: '12px' }}>States (Hover, Focus, Disabled):</p>
        <div className={styles.row}>
          <Button
            variant="primary"
            disabled={isDisabled}
            onClick={() => setClickCount(clickCount + 1)}
          >
            Clicked {clickCount} times
          </Button>
          <Button variant="secondary" disabled={isDisabled}>
            Secondary
          </Button>
          <Button variant="danger" disabled={isDisabled}>
            Danger
          </Button>
          <Button
            variant="secondary"
            onClick={() => setIsDisabled(!isDisabled)}
          >
            {isDisabled ? 'Enable Buttons' : 'Disable Buttons'}
          </Button>
        </div>
      </section>

      {/* Badge Component Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Badge Component</h2>
        <div className={styles.row}>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </section>

      {/* Card Component Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Card Component (Responsive Grid)
        </h2>
        <div className={styles.grid}>
          <Card>
            <h3>Basic Plan</h3>
            <p>Good for personal projects.</p>
            <div>
              <Badge variant="success">Active</Badge>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Button size="small">Select Plan</Button>
            </div>
          </Card>

          <Card>
            <h3>Pro Plan</h3>
            <p>For growing teams and businesses.</p>
            <div>
              <Badge variant="warning">Popular</Badge>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Button size="small">Select Plan</Button>
            </div>
          </Card>

          <Card>
            <h3>Enterprise Plan</h3>
            <p>Custom security and dedicated support.</p>
            <div>
              <Badge variant="error">Sold Out</Badge>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Button size="small" disabled>
                Unavailable
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
