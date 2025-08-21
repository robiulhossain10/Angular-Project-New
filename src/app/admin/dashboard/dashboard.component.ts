import { Component, OnInit } from '@angular/core';

interface Patient {
  id: number;
  name: string;
  age: number;
  disease: string;
  contact: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalPatients = 125;
  totalDoctors = 20;
  totalAppointments = 34;
  revenue = '$12.5k';

  recentPatients: Patient[] = [
    { id: 1, name: 'John Doe', age: 32, disease: 'Flu', contact: '0123456789' },
    {
      id: 2,
      name: 'Jane Smith',
      age: 27,
      disease: 'Cold',
      contact: '0987654321',
    },
    {
      id: 3,
      name: 'Robert Brown',
      age: 40,
      disease: 'Fever',
      contact: '0112233445',
    },
    {
      id: 4,
      name: 'Mary Johnson',
      age: 36,
      disease: 'Covid',
      contact: '0998877665',
    },
    {
      id: 5,
      name: 'Alice White',
      age: 29,
      disease: 'Allergy',
      contact: '0123344556',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
