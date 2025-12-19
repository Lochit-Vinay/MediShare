"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserData } from "@/utils/auth";
import { Plus } from "lucide-react";

// 1) Import your existing DonateForm component:
import DonateForm from "@/components/donor-dashboard/DonateForm";

interface DonateTabProps {
  user: UserData;
}



const DonateTab: React.FC<DonateTabProps> = ({ user }) => {
  // Get the entity_id from the user object
  const donorEntityId = user.entity_id || "";

  // 2) Local state: whether to show the form
  const [showForm, setShowForm] = useState(false);

  // Clicking “Add Donations” will flip showForm to true
  const openDonationForm = () => {
    setShowForm(true);
  };

  // When DonateForm finishes successfully, we hide it again
  const handleSuccess = () => {
    setShowForm(false);
  };

  console.log("⟡ donorEntityId:", donorEntityId);

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold text-medishare-blue mb-4">
          Donate Medicines
        </h2>
        <p className="max-w-lg mx-auto text-gray-600 mb-8">
          Your unused medicines can save lives. We ensure they reach those who need them most.
          Simply click the button below to donate your medicines.
        </p>
        <div className="flex items-center justify-center">
          <Button
            className="bg-medishare-blue hover:bg-medishare-blue/80 text-white font-medium px-6 py-2"
            onClick={openDonationForm}
          >
            <Plus className="mr-2 h-4 w-4" /> Add Donations
          </Button>
        </div>
      </div>

      {/* 3) Render DonateForm inline when showForm === true */}
      {showForm && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">Medicine Donation Form</h3>
          <DonateForm
            donorEntityId={donorEntityId}
            onSuccess={handleSuccess}
          />

          {/* Optional “Cancel” link/button to hide the form */}
          <div className="mt-4 text-center">
            <Button
              variant="secondary"
              onClick={() => setShowForm(false)}
              className="text-red-600 hover:text-red-800"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateTab;
