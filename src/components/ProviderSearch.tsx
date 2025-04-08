"use client";

import React, { useState } from "react";
import { MapPin, Search, Stethoscope } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProviderSearchProps {
  onSearch?: (query: ProviderSearchQuery) => void;
  className?: string;
}

interface ProviderSearchQuery {
  condition: string;
  location: string;
}

const ProviderSearch: React.FC<ProviderSearchProps> = ({
  onSearch,
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState<ProviderSearchQuery>({
    condition: "",
    location: "BC",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ProviderSearchQuery
  ) => {
    setSearchQuery((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
    console.log("Search query:", searchQuery);
  };

  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      <div className="bg-white rounded-lg shadow-sm border border-border/50">
        <div className="grid md:grid-cols-[1fr,auto,1fr,auto] gap-2 p-1.5">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Stethoscope className="h-4 w-4" />
            </div>
            <Input
              className="pl-9 bg-transparent border-0 focus-visible:ring-0 text-sm h-9 placeholder:text-muted-foreground/70"
              placeholder="Condition or concern..."
              value={searchQuery.condition}
              onChange={(e) => handleInputChange(e, "condition")}
            />
          </div>
          
          <div className="hidden md:block w-px h-7 bg-border/50 my-auto" />
          
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
            </div>
            <Input
              className="pl-9 bg-transparent border-0 focus-visible:ring-0 text-sm h-9 placeholder:text-muted-foreground/70"
              placeholder="Location"
              value={searchQuery.location}
              onChange={(e) => handleInputChange(e, "location")}
            />
          </div>

          <Button 
            onClick={handleSearch}
            size="sm"
            className="w-full md:w-auto bg-[#FFE168] hover:bg-[#FFD668] text-black font-medium px-6"
          >
            <Search className="mr-2 h-3.5 w-3.5" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProviderSearch; 