import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  oldIndex = {
    launch_year: undefined,
    launch_success: undefined,
    land_success: undefined
  };
  filter = {
    launch_year: [
      { text: "2006", isActive: false },
      { text: "2007", isActive: false },
      { text: "2008", isActive: false },
      { text: "2009", isActive: false },
      { text: "2010", isActive: false },
      { text: "2011", isActive: false },
      { text: "2012", isActive: false },
      { text: "2013", isActive: false },
      { text: "2014", isActive: false },
      { text: "2015", isActive: false },
      { text: "2016", isActive: false },
      { text: "2017", isActive: false },
      { text: "2018", isActive: false },
      { text: "2019", isActive: false },
      { text: "2020", isActive: false }
    ],
    launch_success: [
      { text: "true", isActive: false },
      { text: "false", isActive: false }
    ],
    land_success: [
      { text: "true", isActive: false },
      { text: "false", isActive: false }
    ]
  };
  filteredData = [];
  filterObj = {};
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.getApiDate("");
  }
  applyFilter(type: string, value: string, index: number) {
    if (this.oldIndex[type] !== undefined)
      this.filter[type][this.oldIndex[type]]["isActive"] = false;
    this.filter[type][index]["isActive"] = true;
    this.oldIndex[type] = index;
    if (this.filterObj[type] !== value) {
      this.filterObj[type] = value;
      let filterString = "&";
      Object.keys(this.filterObj).forEach(val => {
        if (this.filterObj[val]) {
          filterString += `${val}=${this.filterObj[val]}&`;
        }
      });
      filterString = filterString.substring(0, filterString.lastIndexOf("&"));
      this.getApiDate(filterString);
    }
  }
  getApiDate(fiterString: string) {
    this.apiService.getData(fiterString).subscribe((data: []) => {
      this.filteredData = data;
    });
  }
}
