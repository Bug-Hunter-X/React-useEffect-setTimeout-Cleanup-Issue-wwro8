```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: The return value of setTimeout is not a cleanup function
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return <div>Count: {count}</div>;
}
```