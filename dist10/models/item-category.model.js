"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const category_model_1 = require("./category.model");
const item_model_1 = require("./item.model");
let ItemCategory = class ItemCategory extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.belongsTo(() => category_model_1.Category),
    __metadata("design:type", String)
], ItemCategory.prototype, "categotyId", void 0);
__decorate([
    repository_1.belongsTo(() => item_model_1.Item),
    __metadata("design:type", String)
], ItemCategory.prototype, "itemId", void 0);
ItemCategory = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], ItemCategory);
exports.ItemCategory = ItemCategory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jYXRlZ29yeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvaXRlbS1jYXRlZ29yeS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUEwRTtBQUMxRSxxREFBNEM7QUFDNUMsNkNBQW9DO0FBR3BDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWEsU0FBUSxtQkFBTTtJQUV0QyxZQUFZLElBQTRCO1FBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUM7Q0FNRixDQUFBO0FBSkM7SUFEQyxzQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUFRLENBQUM7O2dEQUNSO0FBR2xCO0lBREMsc0JBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBSSxDQUFDOzs0Q0FDUjtBQVRILFlBQVk7SUFEeEIsa0JBQUssRUFBRTs7R0FDSyxZQUFZLENBVXhCO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIG1vZGVsLCBwcm9wZXJ0eSwgYmVsb25nc1RvIH0gZnJvbSAnQGxvb3BiYWNrL3JlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5Lm1vZGVsJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL2l0ZW0ubW9kZWwnO1xuXG5AbW9kZWwoKVxuZXhwb3J0IGNsYXNzIEl0ZW1DYXRlZ29yeSBleHRlbmRzIEVudGl0eSB7XG5cbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8SXRlbUNhdGVnb3J5Pikge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG4gIEBiZWxvbmdzVG8oKCkgPT4gQ2F0ZWdvcnkpXG4gIGNhdGVnb3R5SWQ6IHN0cmluZ1xuXG4gIEBiZWxvbmdzVG8oKCkgPT4gSXRlbSlcbiAgaXRlbUlkOiBzdHJpbmdcbn1cbiJdfQ==