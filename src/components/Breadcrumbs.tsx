import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
        <Link to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors">
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>

        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            {item.path ? (
              <Link to={item.path} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};
