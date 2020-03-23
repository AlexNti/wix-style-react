/* eslint-disable */
/* tslint:disable */
/*
 * DO NOT EDIT THIS FILE!
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * FILE IS BASED ON .wuf/testkits/vanilla-typescript.template.ejs
 * AND GENERATED BY `wuf export-teskits`
 */
import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

type VanillaTestkitFactory<T extends BaseDriver> = (
  params: VanillaTestkitParams,
) => T;

type VanillaUniTestkitFactory<T extends BaseUniDriver> = (
  params: VanillaTestkitParams,
) => T;

interface VanillaTestkitParams {
  wrapper: HTMLElement;
  dataHook: string;
}

import { TooltipDriver } from '../src/Tooltip/Tooltip.driver';
export const tooltipTestkitFactory: VanillaTestkitFactory<TooltipDriver>;
import { TooltipUniDriver } from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';
export const TooltipTestkit: VanillaUniTestkitFactory<TooltipUniDriver>;

type DeprecatedVanillaTestkit = any;

import { AccordionUniDriver } from '../src/Accordion/Accordion.uni.driver';
export const accordionTestkitFactory: VanillaUniTestkitFactory<AccordionUniDriver>;
import { AddItemDriver } from '../src/AddItem/AddItem.driver';
export const addItemTestkitFactory: VanillaTestkitFactory<AddItemDriver<HTMLElement>>;
import { AutoCompleteDriver } from '../src/AutoComplete/AutoComplete.driver';
export const autoCompleteTestkitFactory: VanillaTestkitFactory<AutoCompleteDriver>;
import AvatarUniDriver from '../src/Avatar/Avatar.uni.driver';
export const avatarTestkitFactory: VanillaUniTestkitFactory<AvatarUniDriver>;
import { BadgeDriver } from '../src/Badge/Badge.driver';
export const badgeTestkitFactory: VanillaTestkitFactory<BadgeDriver>;
import { BadgeSelectDriver } from '../src/BadgeSelect/BadgeSelect.driver';
export const badgeSelectTestkitFactory: VanillaTestkitFactory<BadgeSelectDriver>;
import { BoxUniDriver } from '../src/Box/Box.uni.driver';
export const boxTestkitFactory: VanillaUniTestkitFactory<BoxUniDriver>;
import { BreadcrumbsDriver } from '../src/Breadcrumbs/Breadcrumbs.driver';
export const breadcrumbsTestkitFactory: VanillaTestkitFactory<BreadcrumbsDriver>;
import { ButtonUniDriver } from '../src/Button/Button.uni.driver';
export const buttonTestkitFactory: VanillaUniTestkitFactory<ButtonUniDriver>;
import { CalendarDriver } from '../src/Calendar/Calendar.driver';
export const calendarTestkitFactory: VanillaTestkitFactory<CalendarDriver>;
import { CalendarPanelDriver } from '../src/CalendarPanel/CalendarPanel.driver';
export const calendarPanelTestkitFactory: VanillaTestkitFactory<CalendarPanelDriver>;
import { CalendarPanelFooterUniDriver } from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';
export const calendarPanelFooterTestkitFactory: VanillaUniTestkitFactory<CalendarPanelFooterUniDriver>;
import { CardGalleryItemUniDriver } from '../src/CardGalleryItem/CardGalleryItem.uni.driver';
export const cardGalleryItemTestkitFactory: VanillaUniTestkitFactory<CardGalleryItemUniDriver>;
import { CarouselDriver } from '../src/Carousel/Carousel.driver';
export const carouselTestkitFactory: VanillaTestkitFactory<CarouselDriver>;
import { CheckboxDriver } from '../src/Checkbox/Checkbox.driver';
export const checkboxTestkitFactory: VanillaTestkitFactory<CheckboxDriver>;
import { CircularProgressBarDriver } from '../src/CircularProgressBar/CircularProgressBar.driver';
export const circularProgressBarTestkitFactory: VanillaTestkitFactory<CircularProgressBarDriver>;
import { CloseButtonUniDriver } from '../src/CloseButton/CloseButton.uni.driver';
export const closeButtonTestkitFactory: VanillaUniTestkitFactory<CloseButtonUniDriver>;
import { ColorInputUniDriver } from '../src/ColorInput/ColorInput.uni.driver';
export const colorInputTestkitFactory: VanillaUniTestkitFactory<ColorInputUniDriver>;
import { ColorPickerDriver } from '../src/ColorPicker/ColorPicker.driver';
export const colorPickerTestkitFactory: VanillaTestkitFactory<ColorPickerDriver>;
import { ContactItemBuilderDriver } from '../src/ContactItemBuilder/ContactItemBuilder.driver';
export const contactItemBuilderTestkitFactory: VanillaTestkitFactory<ContactItemBuilderDriver>;
import { CounterBadgeUniDriver } from '../src/CounterBadge/CounterBadge.uni.driver';
export const counterBadgeTestkitFactory: VanillaUniTestkitFactory<CounterBadgeUniDriver>;
import { DataTableDriver } from '../src/DataTable/DataTable.driver';
export const dataTableTestkitFactory: VanillaTestkitFactory<DataTableDriver>;
import { DateInputUniDriver } from '../src/DateInput/DateInput.uni.driver';
export const dateInputTestkitFactory: VanillaUniTestkitFactory<DateInputUniDriver>;
import { DatePickerDriver } from '../src/DatePicker/DatePicker.driver';
export const datePickerTestkitFactory: VanillaTestkitFactory<DatePickerDriver>;
import { DropdownDriver } from '../src/Dropdown/Dropdown.driver';
export const dropdownTestkitFactory: VanillaTestkitFactory<DropdownDriver>;
import { DropdownBaseUniDriver } from '../src/DropdownBase/DropdownBase.uni.driver';
export const dropdownBaseTestkitFactory: VanillaUniTestkitFactory<DropdownBaseUniDriver>;
import { DropdownLayoutDriver } from '../src/DropdownLayout/DropdownLayout.driver';
export const dropdownLayoutTestkitFactory: VanillaTestkitFactory<DropdownLayoutDriver>;
import { EditableSelectorDriver } from '../src/EditableSelector/EditableSelector.driver';
export const editableSelectorTestkitFactory: VanillaTestkitFactory<EditableSelectorDriver>;
import { EditableTitleUniDriver } from '../src/EditableTitle/EditableTitle.uni.driver';
export const editableTitleTestkitFactory: VanillaUniTestkitFactory<EditableTitleUniDriver>;
import { EmptyStateDriver } from '../src/EmptyState/EmptyState.driver';
export const emptyStateTestkitFactory: VanillaTestkitFactory<EmptyStateDriver>;
import { ErrorIndicatorUniDriver } from '../src/ErrorIndicator/ErrorIndicator.uni.driver';
export const errorIndicatorTestkitFactory: VanillaUniTestkitFactory<ErrorIndicatorUniDriver>;
import { FilePickerDriver } from '../src/FilePicker/FilePicker.driver';
export const filePickerTestkitFactory: VanillaTestkitFactory<FilePickerDriver>;
import { FloatingHelperDriver } from '../src/FloatingHelper/FloatingHelper.driver';
export const floatingHelperTestkitFactory: VanillaTestkitFactory<FloatingHelperDriver>;
import { FloatingNotificationUniDriver } from '../src/FloatingNotification/FloatingNotification.uni.driver';
export const floatingNotificationTestkitFactory: VanillaUniTestkitFactory<FloatingNotificationUniDriver>;
import { FormFieldDriver } from '../src/FormField/FormField.driver';
export const formFieldTestkitFactory: VanillaTestkitFactory<FormFieldDriver>;
import { GenericModalLayoutDriver } from '../src/GenericModalLayout/GenericModalLayout.driver';
export const genericModalLayoutTestkitFactory: VanillaTestkitFactory<GenericModalLayoutDriver>;
import { GooglePreviewUniDriver } from '../src/GooglePreview/GooglePreview.uni.driver';
export const googlePreviewTestkitFactory: VanillaUniTestkitFactory<GooglePreviewUniDriver>;
import { HeadingDriver } from '../src/Heading/Heading.driver';
export const headingTestkitFactory: VanillaTestkitFactory<HeadingDriver>;
import { HighlighterDriver } from '../src/Highlighter/Highlighter.driver';
export const highlighterTestkitFactory: VanillaTestkitFactory<HighlighterDriver<HTMLElement>>;
import { IconButtonUniDriver } from '../src/IconButton/IconButton.uni.driver';
export const iconButtonTestkitFactory: VanillaUniTestkitFactory<IconButtonUniDriver>;
import { ToggleButtonUniDriver } from '../src/ToggleButton/ToggleButton.uni.driver';
export const toggleButtonTestkitFactory: VanillaUniTestkitFactory<ToggleButtonUniDriver>;
import { ImageViewerDriver } from '../src/ImageViewer/ImageViewer.driver';
export const imageViewerTestkitFactory: VanillaTestkitFactory<ImageViewerDriver<HTMLElement>>;
import { InputDriver } from '../src/Input/Input.driver';
export const inputTestkitFactory: VanillaTestkitFactory<InputDriver>;
import { InputAreaDriver } from '../src/InputArea/InputArea.driver';
export const inputAreaTestkitFactory: VanillaTestkitFactory<InputAreaDriver<HTMLElement>>;
import { InputWithOptionsDriver } from '../src/InputWithOptions/InputWithOptions.driver';
export const inputWithOptionsTestkitFactory: VanillaTestkitFactory<InputWithOptionsDriver>;
import { LabelDriver } from '../src/Label/Label.driver';
export const labelTestkitFactory: VanillaTestkitFactory<LabelDriver>;
import { LinearProgressBarDriver } from '../src/LinearProgressBar/LinearProgressBar.driver';
export const linearProgressBarTestkitFactory: VanillaTestkitFactory<LinearProgressBarDriver>;
import { ListItemActionUniDriver } from '../src/ListItemAction/ListItemAction.uni.driver';
export const listItemActionTestkitFactory: VanillaUniTestkitFactory<ListItemActionUniDriver>;
import { LoaderDriver } from '../src/Loader/Loader.driver';
export const loaderTestkitFactory: VanillaTestkitFactory<LoaderDriver>;
import { ModalDriver } from '../src/Modal/Modal.driver';
export const modalTestkitFactory: VanillaTestkitFactory<ModalDriver<HTMLElement>>;
import { ModalSelectorLayoutDriver } from '../src/ModalSelectorLayout/ModalSelectorLayout.driver';
export const modalSelectorLayoutTestkitFactory: VanillaTestkitFactory<ModalSelectorLayoutDriver>;
import { MultiSelectDriver } from '../src/MultiSelect/MultiSelect.driver';
export const multiSelectTestkitFactory: VanillaTestkitFactory<MultiSelectDriver>;
import { MultiSelectCheckboxDriver } from '../src/MultiSelectCheckbox/MultiSelectCheckbox.driver';
export const multiSelectCheckboxTestkitFactory: VanillaTestkitFactory<MultiSelectCheckboxDriver>;
import { NestableListDriver } from '../src/NestableList/NestableList.driver';
export const nestableListTestkitFactory: VanillaTestkitFactory<NestableListDriver>;
import { NoBorderInputDriver } from '../src/NoBorderInput/NoBorderInput.driver';
export const noBorderInputTestkitFactory: VanillaTestkitFactory<NoBorderInputDriver>;
import { NotificationDriver } from '../src/Notification/Notification.driver';
export const notificationTestkitFactory: VanillaTestkitFactory<NotificationDriver>;
import { NumberInputUniDriver } from '../src/NumberInput/NumberInput.uni.driver';
export const numberInputTestkitFactory: VanillaUniTestkitFactory<NumberInputUniDriver>;
import { PageDriver } from '../src/Page/Page.driver';
export const pageTestkitFactory: VanillaTestkitFactory<PageDriver>;
import { PageHeaderDriver } from '../src/PageHeader/PageHeader.driver';
export const pageHeaderTestkitFactory: VanillaTestkitFactory<PageHeaderDriver>;
import { PopoverDriver } from '../src/Popover/Popover.driver';
export const popoverTestkitFactory: VanillaTestkitFactory<PopoverDriver>;
import { PopoverMenuDriver } from '../src/PopoverMenu/PopoverMenu.driver';
export const popoverMenuTestkitFactory: VanillaTestkitFactory<PopoverMenuDriver>;
import { ProportionUniDriver } from '../src/Proportion/Proportion.uni.driver';
export const proportionTestkitFactory: VanillaUniTestkitFactory<ProportionUniDriver>;
import { RadioGroupDriver } from '../src/RadioGroup/RadioGroup.driver';
export const radioGroupTestkitFactory: VanillaTestkitFactory<RadioGroupDriver>;
import { RangeDriver } from '../src/Range/Range.driver';
export const rangeTestkitFactory: VanillaTestkitFactory<RangeDriver>;
import { RichTextInputAreaUniDriver } from '../src/RichTextInputArea/RichTextInputArea.uni.driver';
export const richTextInputAreaTestkitFactory: VanillaUniTestkitFactory<RichTextInputAreaUniDriver>;
import { SearchDriver } from '../src/Search/Search.driver';
export const searchTestkitFactory: VanillaTestkitFactory<SearchDriver>;
import { SectionHelperDriver } from '../src/SectionHelper/SectionHelper.driver';
export const sectionHelperTestkitFactory: VanillaTestkitFactory<SectionHelperDriver>;
import { SegmentedToggleUniDriver } from '../src/SegmentedToggle/SegmentedToggle.uni.driver';
export const segmentedToggleTestkitFactory: VanillaUniTestkitFactory<SegmentedToggleUniDriver>;
import { SelectorDriver } from '../src/Selector/Selector.driver';
export const selectorTestkitFactory: VanillaTestkitFactory<SelectorDriver>;
import { SidebarUniDriver } from '../src/Sidebar/Sidebar.uni.driver';
export const sidebarTestkitFactory: VanillaUniTestkitFactory<SidebarUniDriver>;
import { SidebarSectionTitleUniDriver } from '../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver';
export const sidebarSectionTitleTestkitFactory: VanillaUniTestkitFactory<SidebarSectionTitleUniDriver>;
import { SkeletonDriver } from '../src/Skeleton/Skeleton.driver';
export const skeletonTestkitFactory: VanillaTestkitFactory<SkeletonDriver>;
import { SliderDriver } from '../src/Slider/Slider.driver';
export const sliderTestkitFactory: VanillaTestkitFactory<SliderDriver>;
import { SocialPreviewUniDriver } from '../src/SocialPreview/SocialPreview.uni.driver';
export const socialPreviewTestkitFactory: VanillaUniTestkitFactory<SocialPreviewUniDriver>;
import { SortableListDriver } from '../src/SortableList/SortableList.driver';
export const sortableListTestkitFactory: VanillaTestkitFactory<SortableListDriver>;
import { StepperUniDriver } from '../src/Stepper/Stepper.uni.driver';
export const stepperTestkitFactory: VanillaUniTestkitFactory<StepperUniDriver>;
import { SwatchesUniDriver } from '../src/Swatches/Swatches.uni.driver';
export const swatchesTestkitFactory: VanillaUniTestkitFactory<SwatchesUniDriver>;
import { TableDriver } from '../src/Table/Table.driver';
export const tableTestkitFactory: VanillaTestkitFactory<TableDriver<HTMLElement>>;
import { TableActionCellDriver } from '../src/TableActionCell/TableActionCell.driver';
export const tableActionCellTestkitFactory: VanillaTestkitFactory<TableActionCellDriver<HTMLElement>>;
import { TabsDriver } from '../src/Tabs/Tabs.driver';
export const tabsTestkitFactory: VanillaTestkitFactory<TabsDriver>;
import { TagDriver } from '../src/Tag/Tag.driver';
export const tagTestkitFactory: VanillaTestkitFactory<TagDriver>;
import { TextDriver } from '../src/Text/Text.driver';
export const textTestkitFactory: VanillaTestkitFactory<TextDriver>;
import { TextButtonUniDriver } from '../src/TextButton/TextButton.uni.driver';
export const textButtonTestkitFactory: VanillaUniTestkitFactory<TextButtonUniDriver>;
import { ThumbnailUniDriver } from '../src/Thumbnail/Thumbnail.uni.driver';
export const thumbnailTestkitFactory: VanillaUniTestkitFactory<ThumbnailUniDriver>;
import { TimeInputDriver } from '../src/TimeInput/TimeInput.driver';
export const timeInputTestkitFactory: VanillaTestkitFactory<TimeInputDriver>;
import { ToggleSwitchDriver } from '../src/ToggleSwitch/ToggleSwitch.driver';
export const toggleSwitchTestkitFactory: VanillaTestkitFactory<ToggleSwitchDriver>;
import { SidebarSectionItemUniDriver } from '../src/SidebarSectionItem/SidebarSectionItem.uni.driver';
export const sidebarSectionItemTestkitFactory: VanillaUniTestkitFactory<SidebarSectionItemUniDriver>;
import { SidebarDividerUniDriver } from '../src/SidebarDivider/SidebarDivider.uni.driver';
export const sidebarDividerTestkitFactory: VanillaUniTestkitFactory<SidebarDividerUniDriver>;
import { SidebarBackButtonUniDriver } from '../src/SidebarBackButton/SidebarBackButton.uni.driver';
export const sidebarBackButtonTestkitFactory: VanillaUniTestkitFactory<SidebarBackButtonUniDriver>;
import { SidebarHeaderUniDriver } from '../src/SidebarHeader/SidebarHeader.uni.driver';
export const sidebarHeaderTestkitFactory: VanillaUniTestkitFactory<SidebarHeaderUniDriver>;
import { ModalPreviewLayoutUniDriver } from '../src/ModalPreviewLayout/ModalPreviewLayout.uni.driver';
export const modalPreviewLayoutTestkitFactory: VanillaUniTestkitFactory<ModalPreviewLayoutUniDriver>;
import { StatisticsWidgetUniDriver } from '../src/StatisticsWidget/StatisticsWidget.uni.driver';
export const statisticsWidgetTestkitFactory: VanillaUniTestkitFactory<StatisticsWidgetUniDriver>;
import { ComposerHeaderUniDriver } from '../src/ComposerHeader/ComposerHeader.uni.driver';
export const composerHeaderTestkitFactory: VanillaUniTestkitFactory<ComposerHeaderUniDriver>;
import { FillPreviewUniDriver } from '../src/FillPreview/FillPreview.uni.driver';
export const fillPreviewTestkitFactory: VanillaUniTestkitFactory<FillPreviewUniDriver>;
import { FillButtonUniDriver } from '../src/FillButton/FillButton.uni.driver';
export const fillButtonTestkitFactory: VanillaUniTestkitFactory<FillButtonUniDriver>;
import { BarChartUniDriver } from '../src/BarChart/BarChart.uni.driver';
export const barChartTestkitFactory: VanillaUniTestkitFactory<BarChartUniDriver>;
import { InputWithLabelUniDriver } from '../src/InputWithLabel/InputWithLabel.uni.driver';
export const inputWithLabelTestkitFactory: VanillaUniTestkitFactory<InputWithLabelUniDriver>;
import { AutoCompleteWithLabelUniDriver } from '../src/AutoCompleteWithLabel/AutoCompleteWithLabel.uni.driver';
export const autoCompleteWithLabelTestkitFactory: VanillaUniTestkitFactory<AutoCompleteWithLabelUniDriver>;
import { DividerUniDriver } from '../src/Divider/Divider.uni.driver';
export const dividerTestkitFactory: VanillaUniTestkitFactory<DividerUniDriver>;
import { LabelledElementUniDriver } from '../src/LabelledElement/LabelledElement.uni.driver';
export const labelledElementTestkitFactory: VanillaUniTestkitFactory<LabelledElementUniDriver>;
import { PreviewWidgetUniDriver } from '../src/PreviewWidget/PreviewWidget.uni.driver';
export const previewWidgetTestkitFactory: VanillaUniTestkitFactory<PreviewWidgetUniDriver>;
import { ModalMobileLayoutUniDriver } from '../src/ModalMobileLayout/ModalMobileLayout.uni.driver';
export const modalMobileLayoutTestkitFactory: VanillaUniTestkitFactory<ModalMobileLayoutUniDriver>;
import { MediaOverlayUniDriver } from '../src/MediaOverlay/MediaOverlay.uni.driver';
export const mediaOverlayTestkitFactory: VanillaUniTestkitFactory<MediaOverlayUniDriver<HTMLElement>>;
import { InfoIconUniDriver } from '../src/InfoIcon/InfoIcon.uni.driver';
export const infoIconTestkitFactory: VanillaUniTestkitFactory<InfoIconUniDriver>;
import { SocialButtonUniDriver } from '../src/SocialButton/SocialButton.uni.driver';
export const socialButtonTestkitFactory: VanillaUniTestkitFactory<SocialButtonUniDriver>;
import { VerticalTabsUniDriver } from '../src/VerticalTabs/VerticalTabs.uni.driver';
export const verticalTabsTestkitFactory: VanillaUniTestkitFactory<VerticalTabsUniDriver>;
import { VerticalTabsItemUniDriver } from '../src/VerticalTabsItem/VerticalTabsItem.uni.driver';
export const verticalTabsItemTestkitFactory: VanillaUniTestkitFactory<VerticalTabsItemUniDriver>;
import { MobilePreviewWidgetUniDriver } from '../src/MobilePreviewWidget/MobilePreviewWidget.uni.driver';
export const mobilePreviewWidgetTestkitFactory: VanillaUniTestkitFactory<MobilePreviewWidgetUniDriver>;
import { ListItemSectionUniDriver } from '../src/ListItemSection/ListItemSection.uni.driver';
export const listItemSectionTestkitFactory: VanillaUniTestkitFactory<ListItemSectionUniDriver>;
import { BrowserPreviewWidgetUniDriver } from '../src/BrowserPreviewWidget/BrowserPreviewWidget.uni.driver';
export const browserPreviewWidgetTestkitFactory: VanillaUniTestkitFactory<BrowserPreviewWidgetUniDriver>;
import { ListItemSelectUniDriver } from '../src/ListItemSelect/ListItemSelect.uni.driver';
export const listItemSelectTestkitFactory: VanillaUniTestkitFactory<ListItemSelectUniDriver>;
import { TimeTableUniDriver } from '../src/TimeTable/TimeTable.uni.driver';
export const timeTableTestkitFactory: VanillaUniTestkitFactory<TimeTableUniDriver>;
import { MarketingLayoutUniDriver } from '../src/MarketingLayout/MarketingLayout.uni.driver';
export const marketingLayoutTestkitFactory: VanillaUniTestkitFactory<MarketingLayoutUniDriver>;
import { PaletteUniDriver } from '../src/Palette/Palette.uni.driver';
export const paletteTestkitFactory: VanillaUniTestkitFactory<PaletteUniDriver>;
import { WarningIndicatorUniDriver } from '../src/WarningIndicator/WarningIndicator.uni.driver';
export const warningIndicatorTestkitFactory: VanillaUniTestkitFactory<WarningIndicatorUniDriver>;
import { VariableInputUniDriver } from '../src/VariableInput/VariableInput.uni.driver';
export const variableInputTestkitFactory: VanillaUniTestkitFactory<VariableInputUniDriver>;
import { ImageUniDriver } from '../src/Image/Image.uni.driver';
export const imageTestkitFactory: VanillaUniTestkitFactory<ImageUniDriver>;
import { SidePanelUniDriver } from '../src/SidePanel/SidePanel.uni.driver';
export const sidePanelTestkitFactory: VanillaUniTestkitFactory<SidePanelUniDriver>;
import { FontUpgradeUniDriver } from '../src/FontUpgrade/FontUpgrade.uni.driver';
export const fontUpgradeTestkitFactory: VanillaUniTestkitFactory<FontUpgradeUniDriver>;
import { CustomModalLayoutUniDriver } from '../src/CustomModalLayout/CustomModalLayout.uni.driver';
export const customModalLayoutTestkitFactory: VanillaUniTestkitFactory<CustomModalLayoutUniDriver>;
import { StatusIndicatorUniDriver } from '../src/StatusIndicator/StatusIndicator.uni.driver';
export const statusIndicatorTestkitFactory: VanillaUniTestkitFactory<StatusIndicatorUniDriver>;
import { MessageModalLayoutUniDriver } from '../src/MessageModalLayout/MessageModalLayout.uni.driver';
export const messageModalLayoutTestkitFactory: VanillaUniTestkitFactory<MessageModalLayoutUniDriver>;
import { EditableListItemUniDriver } from '../src/EditableListItem/EditableListItem.uni.driver';
export const editableListItemTestkitFactory: VanillaUniTestkitFactory<EditableListItemUniDriver>;
import { HeaderDriver } from '../src/Card/Header/Header.driver';
export const headerTestkitFactory: VanillaTestkitFactory<HeaderDriver>;
import { EditableRowDriver } from '../src/EditableSelector/EditableRow/EditableRow.driver';
export const editableRowTestkitFactory: VanillaTestkitFactory<EditableRowDriver>;
import { RadioButtonDriver } from '../src/RadioGroup/RadioButton/RadioButton.driver';
export const radioButtonTestkitFactory: VanillaTestkitFactory<RadioButtonDriver>;
import { MessageBoxMarketerialLayoutDriver } from '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.driver';
export const messageBoxMarketerialLayoutTestkitFactory: VanillaTestkitFactory<MessageBoxMarketerialLayoutDriver>;
import { MessageBoxFunctionalLayoutDriver } from '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.driver';
export const messageBoxFunctionalLayoutTestkitFactory: VanillaTestkitFactory<MessageBoxFunctionalLayoutDriver<HTMLElement>>;
import { CardSubheaderUniDriver } from '../src/Card/Subheader/Subheader.uni.driver';
export const cardSubheaderTestkitFactory: VanillaUniTestkitFactory<CardSubheaderUniDriver>;

export const autoCompleteCompositeTestkitFactory: DeprecatedVanillaTestkit;
export const googleAddressInputWithLabelTestkitFactory: DeprecatedVanillaTestkit;
export const multiSelectCompositeTestkitFactory: DeprecatedVanillaTestkit;
export const statsWidgetTestkitFactory: DeprecatedVanillaTestkit;
export const sideMenuDrillTestkitFactory: DeprecatedVanillaTestkit;
export const sideMenuTestkitFactory: DeprecatedVanillaTestkit;
export const draggableTestkitFactory: DeprecatedVanillaTestkit;
export const fieldLabelAttributesTestkitFactory: DeprecatedVanillaTestkit;
export const fieldWithSelectionCompositeTestkitFactory: DeprecatedVanillaTestkit;
