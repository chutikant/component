/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

// # Tabs Component

// Implements the [Tabs design pattern](https://www.lightningdesignsystem.com/components/tabs/) in React.

// ## Dependencies

// ### React
import React from 'react';
import PropTypes from 'prop-types';

// ### classNames
import classNames from 'classnames';
import { TAB_PANEL } from '../../../utilities/constants';

/**
 * The containers of content that are shown and hidden by `Tabs`.
 */

const TabPanel = ({
	className,
	children,
	variant,
	selected,
	id,
	tabId,
	...attributes // eslint-disable-line no-unused-vars
}) => (
	<div
		aria-labelledby={tabId}
		className={classNames(className, {
			'slds-show': selected,
			'slds-hide': !selected,
			'slds-tabs--default__content': variant === 'default',
			'slds-tabs--scoped__content': variant === 'scoped',
		})}
		id={id}
		role="tabpanel"
	>
		{children.props.children}
	</div>
);

TabPanel.displayName = TAB_PANEL;

TabPanel.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),

	/**
	 * CSS classes to be added to the tab panel.
	 */
	className: PropTypes.string,

	/**
	 * The HTML ID of this tab panel. Also used by the `<Tab />`that controls it as `panelId`.
	 */
	id: PropTypes.string,

	/**
	 * Whether this panel is hidden or shown. Uses the `.slds-show` and `.slds-hide` classes.
	 */
	selected: PropTypes.bool,

	/**
	 * If the Tabs should be scopped, defaults to false
	 */
	variant: PropTypes.oneOf(['default', 'scoped']),

	/**
	 * The HTML ID of the `<Tab />` that controls this panel.
	 */
	tabId: PropTypes.string,
};

TabPanel.defaultProps = {
	variant: 'default',
	selected: false,
};

export default TabPanel;