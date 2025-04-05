import { useState, useEffect } from 'react';

// Simple search hook that uses URL parameters for search term
export function useGlobalSearch() {
  // Get the current search term from URL or empty string
  const getInitialSearchTerm = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('search') || '';
    }
    return '';
  };

  const [searchTerm, setLocalSearchTerm] = useState(getInitialSearchTerm());
  
  // Function to update the search term in URL and state
  const setGlobalSearchTerm = (term: string) => {
    if (typeof window !== 'undefined') {
      // Update URL with search parameter
      const url = new URL(window.location.href);
      if (term) {
        url.searchParams.set('search', term);
      } else {
        url.searchParams.delete('search');
      }
      window.history.pushState({}, '', url);
      
      // Update local state
      setLocalSearchTerm(term);
    }
  };
  
  // Listen for popstate events (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setLocalSearchTerm(getInitialSearchTerm());
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  return { searchTerm, setGlobalSearchTerm };
}
